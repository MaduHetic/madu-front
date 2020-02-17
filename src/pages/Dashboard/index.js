import React from "react";
import { Root } from "./style";
import Chart from "react-apexcharts";
import { Grid } from "@material-ui/core";

const dataDonutClients = {
    options: {
        labels: ['Agence' ,'Co-working', 'École', 'Grand compte', 'Start-up', 'PME', 'Incubateur', 'Autre'],
        title: {
            text: `Clients totaux: ${140}`,
            align: 'middle',
            margin: 0,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '16px',
              color:  '#263238'
            },
        }
    },
    series: [44, 55, 41, 44, 55, 41, 44, 55]
};

const dataDonutPOI = {
    options: {
        labels: ['Food', 'Drink', 'Beauty', 'Fashion', 'Shop', 'Autre'],
        title: {
            text: `POI totaux: ${237}`,
            align: 'middle',
            margin: 0,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '16px',
              color:  '#263238'
            },
        }
    },
    series: [134, 78, 25, 134, 78, 25]
};

const dataLine = {
    options: {
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    },
    series: [
        {
            name: "Utilisateurs",
            data: [10, 30, 70, 240, 320, 400, 510, 820]
        },
        {
            name: "Clients",
            data: [1, 4, 10, 22, 40, 52, 60, 72]
        },
        {
            name: "POI",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
};

const dataBar = {
    options: {
      chart: {
        type: 'bar',
        toolbar: {
            show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['10', '9', '8', '7', '6', '5'],
      }
    },
    series: [{
        data: [540, 580, 690, 1100, 1200, 1380]
    }],
}

const Dashboard = () => {
    return (
        <Root>
            <Grid container spacing={1} justify="space-evenly" alignItems="center" style={{height: "100vh", width: "calc(100vw - 220px)"}}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={6}>
                        <Chart
                            type="line"
                            width="84%"
                            height="auto"
                            {...dataLine}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Chart
                            type="donut"
                            width="84%"
                            height="auto"
                            {...dataDonutClients}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={6}>
                        <Chart
                            type="bar"
                            width="84%"
                            height="auto"
                            {...dataBar}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Chart
                            type="donut"
                            width="84%"
                            height="auto"
                            {...dataDonutPOI}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Root>
    )
};

export default Dashboard;