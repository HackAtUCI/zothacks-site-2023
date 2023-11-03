import { Schedule } from "@/views";
import { Maintenance } from "@/views";

export const revalidate = 60;

// When set to any value
const Component = process.env.MAINTENANCE_MODE_SCHEDULE
	? Maintenance
	: Schedule;

export default Component;
