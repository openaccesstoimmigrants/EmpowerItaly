import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'

export default function BarChart({ chartData }) {
    return (
        <section id="total-immigrants" className="max-w-4xl items-center mx-auto">
            <h1 className="text-4xl font-bold mb-6">From where?</h1>
            <p>Bla bla bla</p>
            <Bar data={chartData} />
        </section>
    )
}