import { cleanEnv, port } from 'envalid';

/**
 * Validates process.env and throws an error if it's invalid ( missing param, wrong param )
 */
export function validateEnv() {
    cleanEnv(process.env, {
        PORT: port()
    });
}