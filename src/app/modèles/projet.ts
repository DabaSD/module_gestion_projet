export class Projet {
    nom !: string
    description ! : string;
    dateDebut ! : Date;
    dateFin ! : Date;
    type ! : string;
    membres : any[] = [];
}
