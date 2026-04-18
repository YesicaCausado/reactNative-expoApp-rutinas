import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';

// RUTA CORREGIDA: Apunta a la carpeta components en la raíz
import Inicio from './components/inicio'; 

export default function App() {
  const [screen, setScreen] = useState('inicio');
  const [estres, setEstres] = useState(1); 

  // Colores dinámicos centralizados
  const themeColor = estres === 1 ? '#4CAF50' : estres === 2 ? '#FF9800' : '#F44336';

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.content}>
        
        {screen === 'inicio' && (
          <Inicio 
            estres={estres} 
            setEstres={setEstres} 
            themeColor={themeColor} 
          />
        )}

        {screen === 'crear' && <Text style={styles.placeholderText}>Nueva Rutina</Text>}
        {screen === 'historial' && <Text style={styles.placeholderText}>Tus Logros</Text>}
      </View>

      {/* MENÚ DE NAVEGACIÓN */}
      <View style={styles.navbar}>
        {['inicio', 'crear', 'historial'].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setScreen(tab)} style={styles.tab}>
            <Text style={[
              styles.tabText, 
              screen === tab && { color: themeColor, fontWeight: 'bold' }
            ]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
            {screen === tab && <View style={[styles.indicator, { backgroundColor: themeColor }]} />}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#FDFDFD' },
  content: { flex: 1 },
  navbar: { 
    flexDirection: 'row', 
    height: 70, 
    backgroundColor: '#FFF', 
    borderTopWidth: 1, 
    borderTopColor: '#EEE', 
    alignItems: 'center' 
  },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabText: { fontSize: 12, color: '#999' },
  indicator: { position: 'absolute', bottom: 15, width: 4, height: 4, borderRadius: 2 },
  placeholderText: { textAlign: 'center', marginTop: 100, fontSize: 18, color: '#999' }
});