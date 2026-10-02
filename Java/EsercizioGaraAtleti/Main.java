package Java.EsercizioGaraAtleti;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Atleta A1 = new Atleta("Jhon");
        Atleta A2 = new Atleta("Mary");

        A1.start();
        A2.start();

        try {
            while (true) {
                if (!A1.isAlive()) {
                    System.out.println("John ha vinto");
                    A2.interrupt();
                    break;
                }

                if (!A2.isAlive()) {
                    System.out.println("Mary ha vinto");
                    A1.interrupt();
                    break;
                }

                Thread.sleep(10);
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }


        System.out.println("Gara finita");
    }
}
