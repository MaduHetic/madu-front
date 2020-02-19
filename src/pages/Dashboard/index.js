import React from "react";
import Chart from "react-apexcharts";
import { Wrapper, TitleDefault } from '../../styles/global';
import { ChartContainer } from './style';

const dataDonutClients = {
    options: {
        plotOptions: {
            pie: {
                donut: {
                    size: '50%'
                }
            }
        },
        labels: ['Agence' ,'Co-working', 'École', 'Grand compte', 'Start-up', 'PME', 'Incubateur', 'Autre'],
        title: {
            text: `Clients totaux: ${140}`,
            align: 'middle',
            margin: 0,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: '12px',
              color: '#263238'
            },
        },
        colors:['#F8C291', '#E77F67', '#6A89CC', '#CF6A87', '#82CCDD', '#786FA6', '#00B894', '#FF7675', '#FAB1A0', '#A29BFE']
    },
    series: [44, 55, 41, 44, 55, 41, 44, 55]
};

const dataDonutPOI = {
    options: {
        plotOptions: {
            pie: {
                donut: {
                    size: '50%'
                }
            }
        },
        labels: ['Food', 'Drink', 'Beauty', 'Fashion', 'Shop', 'Autre'],
        title: {
            text: `POI totaux: ${237}`,
            align: 'middle',
            margin: 0,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: '12px',
              color: '#263238'
            },
        },
        colors:['#F8C291', '#E77F67', '#6A89CC', '#CF6A87', '#82CCDD', '#786FA6', '#00B894', '#FF7675', '#FAB1A0', '#A29BFE']
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
        },
        colors:['#F8C291', '#E77F67', '#6A89CC', '#CF6A87', '#82CCDD', '#786FA6', '#00B894', '#FF7675', '#FAB1A0', '#A29BFE']
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
      colors: ['#F8C291', '#E77F67', '#6A89CC', '#CF6A87', '#82CCDD', '#786FA6'],
      plotOptions: {
        bar: {
          horizontal: true
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['10', '9', '8', '7', '6', '5'],
      }
    },
    series: [{
        data: [540, 580, 690, 1100, 1200, 1380],
    }]
}

const Dashboard = () => {
    return (
        <>
        <Wrapper>
            <TitleDefault>
                <h3 className="title">Key performance indicator</h3>
            </TitleDefault>
            <ChartContainer>
                <div className="chartCard">
                    <h4 class="title">Courbes des croissances</h4>
                    <Chart
                        type="line"
                        {...dataLine}
                    />
                </div>
                <div className="chartCard">
                    <h4 class="title">Points d'intérêts</h4>
                    <Chart
                        type="donut"
                        {...dataDonutPOI}
                    />
                </div>
                <div className="chartCard">
                    <h4 class="title">Green Score</h4>
                    <Chart
                        type="bar"
                        {...dataBar}
                    />
                </div>
                <div className="chartCard">
                    <h4 class="title">Clients</h4>
                    <Chart
                        type="donut"
                        {...dataDonutClients}
                    />
                </div>
            </ChartContainer>
        </Wrapper>
        </>
    )
};

export default Dashboard;