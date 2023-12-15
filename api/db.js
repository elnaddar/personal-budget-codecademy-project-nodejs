const Envelope = (id, title, budget) => {
    return {
        id: Number(id),
        title: title,
        budget: Number(budget)
    };
};

let envelopes = []

const isValidEnvelope = obj => obj.hasOwnProperty('id') &&
                                 obj.hasOwnProperty('title') &&
                                 obj.hasOwnProperty('budget');

const addEnvelope = obj =>{
    if(isValidEnvelope(obj)){
        envelopes.push(Envelope(obj.id, obj.title, obj.budget));
        return obj;
    } else{
        const err = new Error("Invalid evelope");
        err.status = 400;
        throw err;
    }
}

const getAllEnvelopes = ()=> envelopes;

module.exports = {Envelope, isValidEnvelope, addEnvelope, getAllEnvelopes};