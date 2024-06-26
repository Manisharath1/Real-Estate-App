import Listing from "../data/listing.data.js";

export const createListing = async(req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
        
    } catch (error) {
        next(error);
    }
}