const Envelope = (id, title, budget) => {
    return {
        id: Number(id),
        title: title,
        budget: Number(budget)
    };
};

let envelopes = []
