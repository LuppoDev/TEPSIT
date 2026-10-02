package Java.EsercizioCalcolatrice;

public class Calcolo extends Thread {
    private final String espressione;
    private final String chiave;
    private final boolean operazioneDiretta;
    private int valore1, valore2;
    private char operatore;

    // Costruttore per un singolo numero da parsare (foglia dell'espressione)
    public Calcolo(String espressione, String chiave) {
        this.espressione = espressione;
        this.chiave = chiave;
        this.operazioneDiretta = false;
    }

    // Costruttore per combinare due valori già calcolati con un operatore (+ - * /)
    public Calcolo(int valore1, int valore2, char operatore, String chiave) {
        this.espressione = null;
        this.chiave = chiave;
        this.valore1 = valore1;
        this.valore2 = valore2;
        this.operatore = operatore;
        this.operazioneDiretta = true;
    }

    @Override
    public void run() {
        int risultato;
        if (operazioneDiretta) {
            risultato = switch (operatore) {
                case '+' -> valore1 + valore2;
                case '-' -> valore1 - valore2;
                case '*' -> valore1 * valore2;
                case '/' -> valore1 / valore2;
                default -> throw new IllegalArgumentException("Operatore non valido: " + operatore);
            };
        } else {
            risultato = Integer.parseInt(espressione.trim());
        }
        Dati.addDati(chiave, risultato);
    }

    public String getChiave() {
        return chiave;
    }
}