package Java.ContatoreVisiteCon2visitatori;

public class Contatore {
    public synchronized void conteggia() {
        System.out.println("Contatore: " + this.hashCode());
    }
}
