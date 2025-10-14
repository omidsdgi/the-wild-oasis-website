import Cabin from "@/app/_components/Cabin";
import {getBookedDatesByCabinId, getCabin, getCabins, getSettings} from "@/app/_lib/data-service";
import ReservationForm from "@/app/_components/ReservationForm";
import DateSelector from "@/app/_components/DateSelector";

export async function generateMetadata({ params }) {
    const { name } = await getCabin(params.cabinId);
    return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
    const cabins = await getCabins();

    const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

    return ids;
}

export default async function Page({ params }) {
    const cabin = await getCabin(params.cabinId);
    const setting=await getSettings()
    const bookedDates=await getBookedDatesByCabinId(params.cabinId);

    return (
        <div className="max-w-6xl mx-auto mt-8">
            <Cabin cabin={cabin} />

            <div>
                <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
                    Reserve {cabin.name} today. Pay on arrival.
                </h2>
                <div className="grid grid-cols-[4fr_3fr] gap-1  border-primary-800 max-h-[400px]">
                    <DateSelector/>
                    <ReservationForm/>
                </div>
            </div>
        </div>
    );
}
