package Java.Ping;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.ParseException;

public class Ping2 {
    public static void main(String[] args) throws java.io.IOException,
            java.lang.InterruptedException, ParseException {

        // Preparo il comando da eseguire
        String IP = "8.8.8.8";
        String command = "ping -c 2 " + IP;

        try {
            // Creo un processo di sistema che esegue il comando appena creato
            Process process = Runtime.getRuntime().exec(command);

            // Creo un buffer dove mettere le informazioni che arrivano dalla
            // scheda di rete --> controller --> driver
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));

            // Creo una stringa dove mettere il contenuto del buffer
            String line;

            // Leggo il contenuto del buffer finché non è vuoto e lo stampo a video
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }

            reader.close(); // Chiudo il buffer

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}