import arcjet from '../lib/arcjet.js';
import { isSpoofedBot } from "@arcjet/inspect";


export const arcjetProtection = async (req, res, next) => {
    try {
        const decision = await arcjet.protect(req);
        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ error: "Too many Requests, rate limit exceeded" });
            } else if (decision.reason.isBot()) {
                return res.status(403).json({ error: "Bot access denied." });
            } else {
                return res.status(403).json({
                    message: "Access denied. Please check your request headers.",
                });
            }
        }

        //check for spoofed bots
        if (decision.results.some(isSpoofedBot)) {
            return res.status(403).json({
                message: "Spoofed bot detected, Access denied.",
            });
        }
        next();
        
    } catch (error) {
        console.error("Arcjet error:", error);
        res.status(500).json({ error: "Internal server error" });
    }

}
