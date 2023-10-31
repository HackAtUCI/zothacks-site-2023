import { Resources } from "@/views";
import { Maintenance } from "@/views";

// When set to any value
const Component = process.env.MAINTENANCE_MODE_RESOURCES
	? Maintenance
	: Resources;

export default Component;
