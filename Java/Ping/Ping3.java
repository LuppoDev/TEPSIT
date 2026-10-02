package Java.Ping;

import java.io.IOException;

public class Ping3 {
    public static void main(String[] args) throws java.io.IOException,
            java.lang.InterruptedException {

        // Preparo il comando da eseguire
        String IP = "8.8.8.8";
        String command = "ping -c 2 " + IP;

        try {
            // Creo un processo di sistema che esegue il comando
            Process process = Runtime.getRuntime().exec(command);

            // Intercetto il valore di uscita (exit value) del comando ping su Linux:
            // "0"  --> ping riuscito (host raggiungibile)
            // != 0 --> ping senza risposta (host non raggiungibile)
            // .waitFor() è un I/O BLOCCANTE: il programma si ferma finché
            // non riceve una risposta dalla scheda di rete
            int exitValue = process.waitFor();

            if (exitValue == 0)
                System.out.println(IP + "\t acceso");
            else
                System.out.println(IP + "\t spento");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
