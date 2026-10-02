package Java.EsercizioGaraAtleti;


public class Atleta extends Thread{

    private final String nome;
    private int avanzamento = 0;

    public Atleta(String nome) {
        this.nome = nome;
    }

    private int avanza() {
        return 5 + (int)(Math.random() * 11);
    }

    @Override
    public void run() {
        while (avanzamento < 100) {
            System.out.println(nome + " ha percorso " + avanzamento + "m");
            avanzamento += avanza();
            try {
                sleep(500 + (int)(Math.random() * 501));
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
