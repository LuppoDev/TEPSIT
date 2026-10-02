package Java.Thread;

public class Timer extends Thread {
    public static int durata;
    public static int nsec = 40;

    public Timer(int durata) {
        this.durata = durata;
    }

    public static void main(String[] args) {
        System.out.printf("Ciao sono un bellissimo timer di %d secondi", nsec);

        Timer thread = new Timer(500);
        thread.start();

        while (nsec > 0) {
            System.out.printf("orario: %d" + "\n", nsec);
            try {
                sleep(500);
            } catch (InterruptedException e) {
                System.err.println("Errore: " + e);
            }
        }


    }

    @Override
    public void run() {
        while (true) {
//            System.out.println("This code is running in a tread");
            nsec--;
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.err.println("Errore: " + e);
            }
        }
    }


}