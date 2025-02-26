
import { fetchCollectionData } from '@/utils/apiActions/fetchData';
import MaxMinGauge  from './UI/MaxMinGauge';
import { IAssetCurrentRate } from '@/types/Current';
import { IAssets } from '@/types/SimpleTrend';
import { IMaxMinCal } from '@/types/MaxMin';


const MaxMin = async () => {
  // Fetch data with caching applied in the external file
  const [CurrentRateData, SimpleData, MaxMinData] = await Promise.all([
    fetchCollectionData<IAssetCurrentRate[]>('currentrates', 0),
    fetchCollectionData<IAssets[]>('simpletrends', 0),
    fetchCollectionData<IMaxMinCal[]>('maxmins', 0),
  ]);

  return (
      
      <MaxMinGauge CurrentRateData={CurrentRateData[0]} SimpleData={SimpleData[0].assets} MaxMinData = {MaxMinData[0]} />

        
  );
};

export default MaxMin;
