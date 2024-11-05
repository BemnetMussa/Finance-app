import React from 'react'
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import {ResponsiveContainer, AreaChart,
    CartesianGrid, XAxis, YAxis,
    Tooltip, Area, Line, LineChart
    , Legend} from "recharts";
import { useMemo } from 'react';
import { useTheme } from '@emotion/react';
import BoxHeader from '@/components/BoxHeader';

const Row1 = () => {
  const {data} = useGetKpisQuery();

  const { palette } = useTheme();


  const revenueExpense = useMemo(()=> {
    
    return (
      data && data[0].monthlyData.map(({month, revenue, expenses}) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        }
      }
    ));
  }, [data]);

const revenueProfit = useMemo(()=> {
    
    return (
      data && data[0].monthlyData.map(({month, revenue, expenses}) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        }
      }
    ));
  }, [data]);


  return (
    <>
        <DashboardBox  gridArea="a">
          <BoxHeader
            title='Revenue and Expenses'
            subtitle='Top line represents revenue bottom line represnets month interval'
            sideText='+4%'/>
         <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={revenueExpense}
              margin={{
                  top: 15,
                  right: 25,
                  left: -10,
                  bottom: 60,
              }}
            >
              <defs>
                <linearGradient id='colorRevenue' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor={palette.primary[300]} stopOpacity={0.5} />
                  <stop offset='95%' stopColor={palette.primary[300]} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" 
                      tickLine={false}
                      style={{fontSize: "10px"}}/>
              <YAxis 
                      tickLine={false}
                      style={{fontSize: "10px"}}
                      axisLine={{strokeWidth: "0"}}
                      domain={[8000, 23000]}/>
              <Tooltip />

              <Area type="monotone"
                   dataKey="revenue"
                   dot={true}
                   stroke={palette.primary.main} 
                   fillOpacity={1} 
                   fill="url(#colorRevenue)" />

               <Area type="monotone"
                    dot={true}
                   dataKey="expenses"
                   stroke={palette.primary.main} 
                   fillOpacity={1}
                    fill="url(#colorRevenue)" />
              
            </AreaChart>
            
          </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox  gridArea="b">
           <BoxHeader
            title='Profit and Revenue'
            subtitle='Top line represents revenue bottom line represnets month interval'
            sideText='+4%'/>
           <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={revenueProfit}
          margin={{
            top: 20,
            right: 0,
            left: -10,
            bottom: 55,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" 
              tickLine={false}
              style={{fontSize: "10px"}}/>
          <YAxis 
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{fontSize: "10px"}}/>
       
          <YAxis 
              yAxisId="right"
              orientation='right'
              style={{fontSize: "10px"}}
              axisLine={{strokeWidth: "0"}} />

          
          <Tooltip />
          <Legend height={20} wrapperStyle={{
              margin: '0 0 10px 0'
          }}/>
          <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="profit" 
              stroke={palette.tertiary[500]}  />

          <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="revenue" 
              stroke={palette.primary.main}  />
        </LineChart>
      </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox  gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1;