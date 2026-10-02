package Java.ContatoreVisiteCon2visitatori;

public class Main {
    public static void main(String[] args) {
        Visitatore v1 = new Visitatore();
        Visitatore v2 = new Visitatore();

        Contatore c = new Contatore();
        v1.start();
        v2.start();
    }
}
