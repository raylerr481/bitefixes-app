import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { storeCategories, storeProducts } from '../store/catalog';

const blue = '#0b6f8a';
const dark = '#075c73';

export default function Store() {
  const [category, setCategory] = useState<(typeof storeCategories)[number]>('Todos');
  const [query, setQuery] = useState('');

  const products = useMemo(() => storeProducts.filter((product) => {
    const categoryMatch = category === 'Todos' || product.category === category;
    const queryMatch = !query.trim() || `${product.name} ${product.description}`.toLowerCase().includes(query.trim().toLowerCase());
    return categoryMatch && queryMatch && product.active;
  }), [category, query]);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.back}><Text style={styles.backText}>‹</Text></Pressable>
          <View style={{ flex: 1 }}>
            <Text style={styles.brand}>BiteFixes Store</Text>
            <Text style={styles.sub}>Tecnologia, acessórios e soluções</Text>
          </View>
          <Text style={styles.cart}>🛒</Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.kicker}>LOJA BITEFIXES</Text>
          <Text style={styles.title}>Produtos para sua tecnologia.</Text>
          <Text style={styles.description}>A estrutura está pronta para receber novos artigos, preços, imagens, estoque e categorias através do catálogo oficial.</Text>
        </View>

        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Buscar produto..."
          placeholderTextColor="#80919a"
          style={styles.search}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
          {storeCategories.map((item) => (
            <Pressable key={item} onPress={() => setCategory(item)} style={[styles.chip, category === item && styles.chipActive]}>
              <Text style={[styles.chipText, category === item && styles.chipTextActive]}>{item}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {products.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>🛍️</Text>
            <Text style={styles.emptyTitle}>Catálogo em preparação</Text>
            <Text style={styles.emptyText}>Ainda não há artigos publicados nesta categoria. Os próximos produtos poderão ser incorporados ao catálogo sem alterar a estrutura da aplicação.</Text>
          </View>
        ) : products.map((product) => (
          <View key={product.id} style={styles.product}>
            <View style={styles.productImage}><Text style={styles.productEmoji}>📦</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productCategory}>{product.category}</Text>
              <Text style={styles.productDescription}>{product.description}</Text>
              {product.price !== undefined && <Text style={styles.price}>R$ {product.price.toFixed(2).replace('.', ',')}</Text>}
              <Pressable style={styles.productButton}><Text style={styles.productButtonText}>Ver produto</Text></Pressable>
            </View>
          </View>
        ))}

        <View style={styles.future}>
          <Text style={styles.futureTitle}>🚀 Estrutura preparada para crescer</Text>
          <Text style={styles.futureText}>Futuras versões poderão conectar este catálogo ao BiteFixes Backend/Supabase para produtos, categorias, imagens, preços, estoque, carrinho, pedidos e pagamentos.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f5fafb' },
  content: { paddingBottom: 40 },
  header: { minHeight: 72, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', gap: 11, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e3edf0' },
  back: { width: 38, height: 38, borderRadius: 12, backgroundColor: '#edf8fa', alignItems: 'center', justifyContent: 'center' },
  backText: { fontSize: 28, color: dark, lineHeight: 30 },
  brand: { fontSize: 18, fontWeight: '900', color: '#17384f' },
  sub: { fontSize: 10, color: '#73858f', marginTop: 2 },
  cart: { fontSize: 22 },
  hero: { margin: 16, padding: 20, borderRadius: 18, backgroundColor: '#edf8fa', borderWidth: 1, borderColor: '#cce6ec' },
  kicker: { fontSize: 10, fontWeight: '900', letterSpacing: 1.2, color: blue },
  title: { fontSize: 25, lineHeight: 31, fontWeight: '900', color: '#17384f', marginTop: 7 },
  description: { fontSize: 12, lineHeight: 19, color: '#536b77', marginTop: 8 },
  search: { marginHorizontal: 16, height: 48, borderRadius: 12, borderWidth: 1, borderColor: '#bdd6de', backgroundColor: '#fff', paddingHorizontal: 14, color: '#18344d' },
  categories: { paddingHorizontal: 16, gap: 8, paddingVertical: 13 },
  chip: { paddingHorizontal: 13, paddingVertical: 9, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: '#d1e1e6' },
  chipActive: { backgroundColor: blue, borderColor: blue },
  chipText: { fontSize: 11, fontWeight: '700', color: '#607681' },
  chipTextActive: { color: '#fff' },
  empty: { margin: 16, padding: 26, borderRadius: 16, backgroundColor: '#fff', borderWidth: 1, borderColor: '#dce9ed', alignItems: 'center' },
  emptyIcon: { fontSize: 38 },
  emptyTitle: { fontSize: 18, fontWeight: '900', color: '#17384f', marginTop: 10 },
  emptyText: { fontSize: 12, lineHeight: 18, textAlign: 'center', color: '#6b7f89', marginTop: 7 },
  product: { marginHorizontal: 16, marginBottom: 10, padding: 14, borderRadius: 15, backgroundColor: '#fff', borderWidth: 1, borderColor: '#dce9ed', flexDirection: 'row', gap: 13 },
  productImage: { width: 88, height: 88, borderRadius: 12, backgroundColor: '#edf8fa', alignItems: 'center', justifyContent: 'center' },
  productEmoji: { fontSize: 32 },
  productName: { fontSize: 15, fontWeight: '900', color: '#183b51' },
  productCategory: { fontSize: 10, color: blue, fontWeight: '800', marginTop: 3 },
  productDescription: { fontSize: 11, lineHeight: 16, color: '#667b86', marginTop: 4 },
  price: { fontSize: 15, fontWeight: '900', color: dark, marginTop: 6 },
  productButton: { alignSelf: 'flex-start', marginTop: 8, backgroundColor: blue, borderRadius: 8, paddingHorizontal: 11, paddingVertical: 7 },
  productButtonText: { color: '#fff', fontSize: 10, fontWeight: '800' },
  future: { margin: 16, padding: 17, borderRadius: 15, backgroundColor: '#fff', borderWidth: 1, borderColor: '#cce6ec' },
  futureTitle: { fontSize: 14, fontWeight: '900', color: dark },
  futureText: { fontSize: 11, lineHeight: 17, color: '#6b7f89', marginTop: 5 },
});
