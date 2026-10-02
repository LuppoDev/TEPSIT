package Java.EsercizioCalcolatrice;

import java.util.Scanner;

public class Main {
    private static String espressione;
    private static int pos;
    private static int contatoreRisultati = 0;

    public static void main(String[] args) throws InterruptedException {
        Scanner sc = new Scanner(System.in);
        System.out.println("Inserisci l'espressione: ");
        String input = sc.nextLine();

        // Sostituzione delle lettere (variabili) con i valori inseriti dall'utente
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c) && input.indexOf(c) == input.lastIndexOf(c)) {
                // evita di richiedere due volte la stessa lettera se compare più volte
            }
        }
        StringBuilder sb = new StringBuilder(input);
        for (int i = 0; i < sb.length(); i++) {
            char c = sb.charAt(i);
            if (Character.isLetter(c)) {
                System.out.println("Inserisci valore di " + c + ": ");
                String valore = sc.next();
                for (int j = 0; j < sb.length(); j++) {
                    if (sb.charAt(j) == c) {
                        sb.setCharAt(j, '#'); // placeholder temporaneo, sostituito sotto
                    }
                }
                // sostituzione vera e propria di tutte le occorrenze della lettera col valore
                String temp = sb.toString().replace("#", valore);
                sb = new StringBuilder(temp);
            }
        }

        // Inserisce moltiplicazioni implicite tipo "2y" -> "2*y" già risolte, ma serve
        // gestire anche "numero(" o ")numero" o ")(" come moltiplicazione implicita
        espressione = espressione.replace(" ", "");
        espressione = inserisciMoltiplicazioniImplicite(sb.toString());
        pos = 0;

        String chiaveRisultato = parseEspressione();
        System.out.println("Risultato finale: " + Dati.getDati(chiaveRisultato));
    }

    // Aggiunge '*' esplicito dove c'è moltiplicazione implicita: 3(...)  o  )(  o  )3
    private static String inserisciMoltiplicazioniImplicite(String s) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            result.append(c);
            if (i + 1 < s.length()) {
                char next = s.charAt(i + 1);
                boolean cFineValore = Character.isDigit(c) || c == ')';
                boolean nextInizioValore = next == '(' || Character.isDigit(next);
                if (cFineValore && next == '(') {
                    result.append('*');
                } else if (c == ')' && Character.isDigit(next)) {
                    result.append('*');
                }
            }
        }
        return result.toString();
    }

    // Grammatica: espressione = termine (('+' | '-') termine)*
    private static String parseEspressione() throws InterruptedException {
        String chiaveSinistra = parseTermine();
        while (pos < espressione.length() && (espressione.charAt(pos) == '+' || espressione.charAt(pos) == '-')) {
            char op = espressione.charAt(pos);
            pos++;
            String chiaveDestra = parseTermine();
            chiaveSinistra = combina(chiaveSinistra, chiaveDestra, op);
        }
        return chiaveSinistra;
    }

    // Grammatica: termine = fattore (('*' | '/') fattore)*
    private static String parseTermine() throws InterruptedException {
        String chiaveSinistra = parseFattore();
        while (pos < espressione.length() && (espressione.charAt(pos) == '*' || espressione.charAt(pos) == '/')) {
            char op = espressione.charAt(pos);
            pos++;
            String chiaveDestra = parseFattore();
            chiaveSinistra = combina(chiaveSinistra, chiaveDestra, op);
        }
        return chiaveSinistra;
    }

    // Grammatica: fattore = '(' espressione ')' | ['-'] numero
    private static String parseFattore() throws InterruptedException {
        if (espressione.charAt(pos) == '(') {
            pos++; // salta '('
            String chiave = parseEspressione();
            pos++; // salta ')'
            return chiave;
        }

        boolean negativo = false;
        if (espressione.charAt(pos) == '-') {
            negativo = true;
            pos++;
        }

        int start = pos;
        while (pos < espressione.length() && Character.isDigit(espressione.charAt(pos))) {
            pos++;
        }
        String numero = espressione.substring(start, pos);
        if (negativo) numero = "-" + numero;

        contatoreRisultati++;
        String chiave = "R" + contatoreRisultati;
        Calcolo t = new Calcolo(numero, chiave);
        t.start();
        t.join();
        return chiave;
    }

    // Crea un thread che combina due risultati già calcolati con un operatore
    private static String combina(String chiave1, String chiave2, char operatore) throws InterruptedException {
        int valore1 = Dati.getDati(chiave1);
        int valore2 = Dati.getDati(chiave2);

        contatoreRisultati++;
        String nuovaChiave = "R" + contatoreRisultati;

        Calcolo t = new Calcolo(valore1, valore2, operatore, nuovaChiave);
        t.start();
        t.join();
        return nuovaChiave;
    }
}