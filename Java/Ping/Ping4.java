package Java.Ping;

import java.io.IOException;
import java.text.ParseException;

public class Ping4 {
    public static void main(String[] args) throws java.io.IOException,
            java.lang.InterruptedException, ParseException {

        // IP assume il valore passato come parametro da riga di comando
        // Esempio: > java main 1.1.1.1
        // args[0] --> "1.1.1.1"
        String IP = args[0];
        String command = "ping -c 2 " + IP;

        try {
            Process process = Runtime.getRuntime().exec(command);

            int exitValue = process.waitFor();

            if (exitValue == 0)
                System.out.println("\u001B[32m" + IP + "\t acceso" + "\u001B[0m");
            else
                System.out.println("\u001B[31m" + IP + "\t spento" + "\u001B[0m");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
