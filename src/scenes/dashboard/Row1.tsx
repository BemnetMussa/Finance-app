import React from 'react'
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import {ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area} from "recharts";
import { useMemo } from 'react';
import { useTheme } from '@emotion/react';

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
  console.log("🚀 ~ revenueExpense ~  revenueExpense:",  revenueExpense)
  
  return (
    <>
        <DashboardBox  gridArea="a">
         <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={revenueExpense}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox  gridArea="b"></DashboardBox>
        <DashboardBox  gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1;