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

const validateAddBudget = (newBudget, oldBudget) => {
    if (newBudget != null && newBudget != undefined) return Number(newBudget);
    else return oldBudget;
}

const updateEnvelopeById = (id, title = null, budget = null) => {
    if (title || budget != null) {
        const idx = getIdxEnvelopeById(id);
        envelopes[idx].title = title || envelopes[idx].title;
        envelopes[idx].budget = validateAddBudget(budget, envelopes[idx].budget);
        return envelopes[idx];
    } else {
        const err = new Error(`Can't change value when title and budget are null.`);
        err.status = 400;
        throw err;
    }
}

const deleteEnvelope = id => {
    const idx = getIdxEnvelopeById(id);
    try {
        const elm = envelopes[idx];
        envelopes.splice(idx, 1);
        return elm;
    } catch (error) {
        const err = new Error(`server got error, ${error}.`);
        err.status = 500;
        throw err;
    }
}

const transferBudget = (from, to, amount) => {
    const fromIdx = getIdxEnvelopeById(from);
    const toIdx = getIdxEnvelopeById(to);
    if (envelopes[fromIdx].budget >= amount) {
        envelopes[fromIdx].budget -= amount;
        envelopes[toIdx].budget += amount;
    } else {
        const err = new Error(`Envelope with id ${from} has only ${envelopes[fromIdx].budget} which is less than ${amount} you try to transfere.`);
        err.status = 400;
        throw err;
    }
}

module.exports = { Envelope, isValidEnvelope, addEnvelope, getAllEnvelopes, getEnvelopeById, updateEnvelopeById, deleteEnvelope, transferBudget };