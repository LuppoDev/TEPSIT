package Java.Parcheggio;

public class Main {
    public static void main(String[] args) {
        Parcheggio parcheggio = new Parcheggio();
        Automobile mercedes = new Automobile("Mercedes", parcheggio);
        Automobile mazda = new Automobile("Mazda", parcheggio);
        Automobile ferrari = new Automobile("Ferrari", parcheggio);
        mercedes.start();
        mazda.start();
        ferrari.start();
    }
}