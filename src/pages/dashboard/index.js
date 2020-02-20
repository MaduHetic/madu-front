import React from "react";
import Chart from "react-apexcharts";
import { Wrapper, TitleDefault } from '../../styles/global';
import { ChartContainer } from './style';
import { Stats } from "../../core/statsDashboard";

const Dashboard = () => {
    const stats = Stats.stats();
    if (!stats.company || !stats.poi || !stats.greenScore) return null;

    const dataDonutClients = {
        options: {
            plotOptions: {
                pie: {
                    donut: {
                        size: '50%'
                    }
                }
            },
            labels: stats.company.companyType.map(data => data.companyType),
            colors:['#6A89CC', '#F8C291', '#E77F67', '#CF6A87', '#82CCDD', '#786FA6', '#00B894', '#FF7675', '#FAB1A0', '#A29BFE']
        },
        series: stats.company.companyType.map(data => data.nbType)
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
            labels: stats.poi.types.map(data => data.typeName),
            colors:['#6A89CC', '#F8C291', '#E77F67', '#CF6A87', '#82CCDD', '#786FA6', '#00B894', '#FF7675', '#FAB1A0', '#A29BFE']
        },
        series: stats.poi.types.map(data => data.nbType)
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
                categories: ["06/19", "07/19", "08/19", "09/19", "10/19", "11/19", "12/19", "01/20", "02/20"]
            },
            colors:['#E77F67', '#6A89CC', '#CF6A87', '#82CCDD', '#786FA6', '#00B894', '#FF7675', '#FAB1A0', '#A29BFE']
        },
        series: [
            // {
            //     name: "Utilisateurs",
            //     data: [10, 30, 70, 240, 320, 400, 510, 820]
            // },
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
          colors: ['#6A89CC', '#E77F67', "#F8C291", '#CF6A87', '#82CCDD', '#786FA6'],
          plotOptions: {
            bar: {
              horizontal: true
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ['100', '90', '80', '70', '60', '50'],
          },
        },
        series: [{
            data: stats.greenScore.every(item => item === 0) ? [540, 580, 690, 1100, 1200, 1380] : stats.greenScore,
        }]
    }

    return (
        <>
        <Wrapper>
            <TitleDefault>
                <h3 className="title">Key performance indicator</h3>
            </TitleDefault>
            <ChartContainer>
                <div className="chartCard">
                    <h4 className="title">Courbes des croissances</h4>
                    <Chart
                        type="line"
                        {...dataLine}
                    />
                </div>
                <div className="chartCard">
                    <h4 className="title">Points d'intérêts ({stats.poi.nbPoi})</h4>
                    <Chart
                        type="donut"
                        {...dataDonutPOI}
                    />
                </div>
                <div className="chartCard">
                    <h4 className="title">Green Score</h4>
                    <Chart
                        type="bar"
                        {...dataBar}
                    />
                </div>
                <div className="chartCard">
                    <h4 className="title">Clients ({stats.company.nbCompany})</h4>
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