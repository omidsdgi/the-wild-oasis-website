import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {getBookedDatesByCabinId, getCabin, getSettings} from "@/app/_lib/data-service";
import {auth} from "@/app/_lib/auth";
import LoginMessage from "@/app/_components/LoginMessage";

async function Reservation({cabin}) {
    const session=await auth()
    const [settings,bookedDates]=await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id),
    ])
    return (
        <div className="grid grid-cols-[4fr_3fr] gap-1 border border-primary-800 max-h-[400px]">
            <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
            {session.user ? <ReservationForm cabin={cabin} user={session.user}/> : <LoginMessage/>}
        </div>
    );
}

export default Reservation