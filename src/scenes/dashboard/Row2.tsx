
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery } from '@/state/api';
import {ResponsiveContainer, 
    CartesianGrid, XAxis, YAxis,
    Tooltip, Line, LineChart } from "recharts";
import BoxHeader from '@/components/BoxHeader';
import { useTheme } from '@emotion/react';
import { useMemo } from 'react';



const Row2 = () => {
  const { data } = useGetProductsQuery();
  const { palette } = useTheme();
  const { data: productData } = useGetProductsQuery();

  const { data: operationalData } = useGetKpisQuery();
  console.log("🚀 ~ Row2 ~ operationalData:", operationalData)

  const operationalExpenses = useMemo(() => {

    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);
  

  return (
    <>
        <DashboardBox  gridArea="d">
              <BoxHeader
                title='Operational vs Non-operational expenses'
                subtitle='Top line represents revenue bottom line represnets month interval'
                sideText='+4%'/>
              <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={operationalExpenses}
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
                  orientation='left'
                  tickLine={false}
                  axisLine={false}
                  style={{fontSize: "10px"}}/>
          
              <YAxis 
                  yAxisId="right"
                  orientation='right'
                  style={{fontSize: "10px"}}
                  axisLine={{strokeWidth: "0"}} />

              
              <Tooltip />
            
              <Line 
                  yAxisId="left" 
                  type="monotone" 
                  dataKey="Non Operational Expenses" 
                  stroke={palette.tertiary[500]}  />

              <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="Operational Expenses" 
                  stroke={palette.primary.main}  />
            </LineChart>
          </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox  gridArea="e"></DashboardBox>
        <DashboardBox  gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2;
