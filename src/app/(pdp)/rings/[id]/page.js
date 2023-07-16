import { store } from "@/store";
import { setData } from "@/store/pdpSlice";
import Provider from "@/components/Provider";
import Preloader from "@components/pdp/Preloader";
import BasicDetails from "@components/pdp/BasicDetails";
import Customization from "@components/pdp/Customization";


async function getData(id) {
    const res = await fetch(
        `http://127.0.0.1:8000/api/rest/v2/products/rings/${id}/`,
        { cache: "force-cache" }
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Pdp({ params }) {
    const data = await getData(params.id);
    store.dispatch(setData(data));

    return (

    <main className="p-3">
        <Preloader data={data} />
        <Provider>
            <BasicDetails />
            <Customization />
        </Provider>
    </main>
    )
}

export async function generateStaticParams() {
    const data =  [
        { id: "sra1236-women-glanza-solitare-engagement-rings" },
        { id: "ara1205-women-ella-solitare-engagement-rings" },
        { id: "ara1298-women-arena-solitare-engagement-rings" },
        { id: "ara1382-women-swathe-solitare-engagement-rings" },
        { id: "ara1208-women-camila-solitare-engagement-rings" },
        { id: "ara1345-women-astral-solitare-engagement-rings" },
    ]
    return data;
}
