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

const addEnvelope = obj => {
    if (isValidEnvelope(obj)) {
        envelopes.push(Envelope(obj.id, obj.title, obj.budget));
        return obj;
    } else {
        const err = new Error(`Invalid evelope ${obj}`);
        err.status = 400;
        throw err;
    }
}

const getAllEnvelopes = () => envelopes;

const getEnvelopeById = id => {
    const enve = envelopes.find(obj => obj.id == id);
    if (enve) {
        return enve;
    } else {
        const err = new Error(`Evnvelope with id: ${id} not found`);
        err.status = 400;
        throw err;
    }
};

const getIdxEnvelopeById = id => {
    const idx = envelopes.findIndex(obj => obj.id == id);
    if (idx != -1) {
        return idx;
    } else {
        const err = new Error(`Evnvelope with id: ${id} not found`);
        err.status = 400;
        throw err;
    }
};

const updateEnvelopeById = (id, title = null, budget = null) => {
    if (title || budget) {
        const idx = getIdxEnvelopeById(id);
        envelopes[idx].title = title || envelopes[idx].title;
        envelopes[idx].budget = budget || envelopes[idx].budget;
        return envelopes[idx];
    } else {
        const err = new Error(`Can't change value when title and budget are null.`);
        err.status = 400;
        throw err;
    }
}
module.exports = { Envelope, isValidEnvelope, addEnvelope, getAllEnvelopes, getEnvelopeById, updateEnvelopeById };