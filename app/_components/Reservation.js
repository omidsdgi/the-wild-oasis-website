import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {getBookedDatesByCabinId, getCabin, getSettings} from "@/app/_lib/data-service";

async function Reservation({cabin}) {
    const [settings,bookedDates]=await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id),
    ])
    return (
        <div className="grid grid-cols-[4fr_3fr] gap-1 border border-primary-800 max-h-[400px]">
            <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin}/>
            <ReservationForm cabin={cabin}/>
        </div>
    );
}

export default Reservation