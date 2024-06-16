import { useEffect, useState } from 'react';
import supabase from '@/config/supabaseClient';

export type Country = {
  name: string;
  // Add other properties as needed
};

export type Accommodations = {
  accommodation_id: bigint;
  name: string;
  location: bigint;
  type: string;
  mobility: string;
  distance_to_crag: string;
  transport_needed: string;
  solo_friendly: boolean;
  remarks: string;
  coordinates: string;
  how_to_get_there: string;
  contact_email: string;
  contact_phone: string;
  website: string;
  contact_person: string;
  // Add other properties as needed
};

function Fetch() {
  const [countries, setCountries] = useState<Country[] | null>([]);
  const [accommodations, setAccommodations] = useState<Accommodations[] | null>(
    [],
  );
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    getAccommodations();
  }, []);

  async function getAccommodations() {
    const { data, error } = await supabase.from('accommodations').select();

    if (error) {
      setFetchError(`Could not fetch accommodations: ${error}`);
      setAccommodations(null);
    }
    if (data) {
      setAccommodations(data);
      setFetchError(null);
    }
    setAccommodations(data);
  }

  useEffect(() => {
    const fetchCountries = async () => {
      const { data, error } = await supabase.from('countries').select();

      if (error) {
        setFetchError(`Could not fetch countries:  ${error}`);
        setCountries(null);
      }
      if (data) {
        setCountries(data);
        setFetchError(null);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Countries: </h1>
        {fetchError && <p>{fetchError}</p>}
        {countries?.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </div>

      <div className="container">
        <h1>Accommodations: </h1>
        {fetchError && <p>{fetchError}</p>}
        {accommodations?.map((accommodation) => (
          <li key={accommodation.name}>{accommodation.name}</li>
        ))}
      </div>
    </div>
  );
}

export default Fetch;
