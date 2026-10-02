package Java.EsercizioCalcolatrice;

import java.util.HashMap;

public class Dati {
    private static HashMap<String, Integer> dati = new HashMap<>();

    public static void addDati(String espressione, int risultato) {
        dati.put(espressione, risultato);
    }

    public static int getDati(String espressione) {
        return dati.get(espressione);
    }
}
