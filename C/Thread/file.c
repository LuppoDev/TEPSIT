#include <stdlib.h>
#include <stdio.h>
#include <pthread.h>
/** NOTA: L'anomalia non si presenta se eseguita all'interno di Macchine virtuali,
come VirtualBox o VmWare. Perché? */
int biglietti = 433;

void *sell_ticket(void *arg)
{
    biglietti++;
    return NULL;
}
void *buy_ticket(void *arg)
{
    biglietti--;
    return NULL;
}
int main(int argc, char *argv[])
{
    int i;
    pthread_t th1, th2;
    printf("biglietti all'inizio: %d\n", biglietti);
    for (i = 0; i < 100000; i++)
    {
        pthread_create(&th1, NULL, buy_ticket, NULL);
        pthread_create(&th2, NULL, sell_ticket, NULL);
        pthread_join(th1, NULL);
        pthread_join(th2, NULL);
    }

    printf("biglietti alla fine: %d\n", biglietti);
    return 0;
}