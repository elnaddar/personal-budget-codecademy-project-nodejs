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
        throw new Error("Invalid evelope");
    }
}

module.exports = {Envelope, isValidEnvelope, addEnvelope};