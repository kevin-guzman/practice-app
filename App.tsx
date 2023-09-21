/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';
import { useDebounce } from "@uidotdev/usehooks";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { ResgisterUser } from './src/pages/registerUser';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};


type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

function validateResponse(response:ProductsResponse): Promise<Product[]>{
  return new Promise((resolve, reject)=>{
    if (!Object.hasOwn(response, "products")){
      console.log(response);
      
      reject(new Error("Not a valid response"))
      return;
    }
    //console.log("res", response);
    
    resolve(response.products)
  })
}


const BASE_URL = "https://dummyjson.com/products"


function App(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 300)
  useEffect(() => {
    fetch(BASE_URL+"?limit=30")
    .then(res=>res.json())
    .then(validateResponse)
    .then(( products ) => setProducts(products)).catch(console.log);
  },[])

  useEffect(() => {
    console.log("Searching", debouncedSearch);
    if (debouncedSearch.length < 3) return;
    console.log("True searching");
    
    fetch(`${BASE_URL}?limit=5&search?q=${debouncedSearch}`)
    .then(res => res.json())
    .then(validateResponse)
      // .then(r=>console.log("response of search", r))
    .then((products)=>setProducts(products)).catch(console.log);

  }, [debouncedSearch])

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <TextInput onChangeText={(text) => setSearch(text)} />
      <ResgisterUser/>
      {products && products.map(({ title, id }) => <Text key={id.toString()} >{title}</Text>)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
