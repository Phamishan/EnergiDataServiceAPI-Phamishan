const ctx = document.getElementById("myChart");

fetch("https://api.energidataservice.dk/dataset/CO2Emis?limit=16")
    .then((res) => res.json())
    .then((data) => {
        let arrayOfCO2Emission = [];
        let arrayOfTime = [];
        for (let i = 0; i < data.records.length; i++) {
            arrayOfCO2Emission.push(data.records[i].CO2Emission);
            arrayOfTime.push(data.records[i].Minutes5DK);
        }
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: arrayOfTime,
                datasets: [
                    {
                        label: "g/kWh",
                        data: arrayOfCO2Emission,
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    });
