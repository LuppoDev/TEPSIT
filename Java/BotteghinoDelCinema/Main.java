package Java.BotteghinoDelCinema;

public class Main {
    public static void main(String[] args) {

        Botteghino botteghino = new Botteghino(2);

        Cliente anna = new Cliente(botteghino);
        Cliente marco = new Cliente(botteghino);
        Cliente giulia = new Cliente(botteghino);
        Cliente luca = new Cliente(botteghino);
        Cliente giovanni = new Cliente(botteghino);

        Fornitore fornitore = new Fornitore(botteghino);

        anna.setName("Anna");
        marco.setName("Marco");
        giulia.setName("Giulia");
        luca.setName("Luca");
        giovanni.setName("Giovanni");

        fornitore.setName("Fornitore");

        anna.start();
        marco.start();
        giulia.start();
        luca.start();
        giovanni.start();

        fornitore.start();
    }
}
