interface errorTypes {
    [key: string]: string
}

export const Errors: errorTypes = {
    NOT_FILLED_FORM: 'Please fill in the form with your email and wallet',
    IN_PROCESS: 'This fishtank is being selected. Wait a moment to seee if the reservation is succesful. If it is not succesful, you will be able to book it.'
} 