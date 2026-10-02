package Java.EsercizioSistemaDiDownload;

import static java.lang.Thread.sleep;

public class Download extends Thread {

    private final String nomeFile;

    public Download(String nomeFile) {
        this.nomeFile = nomeFile;
    }

    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            if (i % 25 == 0) {
                System.out.println(nomeFile + " - " + i + "% completato");
            }
            try {
                sleep(100);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        System.out.println(nomeFile + " - Download completato");
    }
}
