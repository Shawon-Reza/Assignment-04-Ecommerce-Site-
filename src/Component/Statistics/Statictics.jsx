import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Helmet } from "react-helmet-async";

const Statictics = () => {
    const [barData, setBarData] = useState([]);

    useEffect(() => {
        fetch("/fackData.json")
            .then((res) => res.json())
            .then((data) => setBarData(data))
            .catch((err) => console.error("Failed to fetch data:", err));
    }, []);

    console.log(barData);

    return (
        <div>
            <Helmet>
                <title>Gadget Haven | Statics</title>
            </Helmet>
            <NavBar />
            <div className="mt-20" style={{ width: "100%", height: 400 }}>
                {/* ResponsiveContainer ensures the chart is responsive */}
                <ResponsiveContainer>
                    <BarChart
                        width={600}
                        height={300}
                        data={barData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 50, // Adjust bottom margin for rotated text
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="product_title"
                            tick={{ fontSize: 12 }}
                            angle={-45}
                            textAnchor="end"
                            interval={0} // Display all labels
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <Footer />
        </div>
    );
};

export default Statictics;
