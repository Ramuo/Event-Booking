import Event from "../models/EventModel.js";
import asyncHandler from "../middleware/asyncHandler.js"


//@desc     Create Event
//@route    POST /api/events
//@access   Private/admin
const createEvent = asyncHandler(async(req, res) => {
    const event = await Event.create(req.body);

    res.status(201).json(event);
});

//@desc     Update Event
//@route    PUT /api/events/:id
//@access   Private/admin
const updateEvent = asyncHandler(async(req, res) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if(event){
        res.status(200).json(event); 
    }else{
        res.status(400);
        throw new Error("Echec de la modification, une erreur s'est produite")
    }
});

//@desc     Delete Event
//@route    DELETE /api/events/:id
//@access   Private/admin
const deleteEvent = asyncHandler(async(req, res) => {
    const event = await Event.findByI(req.params.id);

    if(event){
        res.json({ message: 'Évènement supprimé' })
    }else{
        res.status(404);
        throw new Error("Une erreur s'est produite en supprimant cet évènemen");
    }
});

//@desc     Get all Events
//@route    DELETE /api/events/delete-event/:id
//@access   Private/admin
const getEvents = asyncHandler(async(req, res) => {
    const events = await Event.find({});

    res.status(200).json(events);
});

//@desc     Get Events by Id
//@route    DELETE /api/events//:id
//@access   Private/admin
const getEventById = asyncHandler(async(req, res) => {
    const event = await Event.find(req.params.id);

    if(event){
        return res.json(event)
    }else{
        res.status(404);
        throw new Error('Évènement non trouvé');
    }
    
});




export {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventById,
}