import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Events } from '../../models/events.model';
import { updateDate } from 'ionic-angular/util/datetime-util';

@Injectable()
export class EventsProvider{

    public eventListRef: firebase.database.Reference;

    constructor(){
        this.eventListRef = firebase
        .database()
        .ref(`/events`)
    }

    getEventList(): firebase.database.Reference{
        return this.eventListRef;
    }

    eventDetails(eventId:string):firebase.database.Reference{
        return this.eventListRef.child(eventId);
    }
}