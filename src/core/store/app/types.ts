export const NAMESPACE = 'app';

/**
 * Getters
 */

export const _GET_CONNECTION_CONFIGURATION = 'getConnectionConfiguration';
export const GET_CONNECTION_CONFIGURATION = NAMESPACE + '/' + _GET_CONNECTION_CONFIGURATION;


/**
 * Setters
 */
export const _SET_CONNECTION_CONFIGURATION = 'setConnectionConfiguration'


export class State {
    connectionConfiguration: string;

    constructor() {
        this.connectionConfiguration = '';
    }
}