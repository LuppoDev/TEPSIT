package Java.EsercizioSistemaDiDownload;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Download D1 = new Download("Video.mp4");
        Download D2 = new Download("Audio.mp3");

        D1.start();
        D2.start();

        D1.join();
        D2.join();

        System.out.println("Elaborazione file completata!");
        System.out.println("Sistema terminato");
    }
}
