import React, { useState } from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatCard } from '@/components/dashboard/StatCard';
import { ActivityCard, Activity } from '@/components/dashboard/ActivityCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  DollarSign, 
  TrendingUp, 
  ClipboardList,
  FileText,
  Calendar,
  Plus,
  ChevronRight
} from 'lucide-react-native';

// Mock data for the dashboard
const mockActivities: Activity[] = [
  {
    id: '1',
    action: 'Created',
    entityType: 'task',
    entityId: 'task1',
    details: { title: 'Fence repair at north pasture' },
    createdAt: '2025-05-12T10:30:00Z',
    user: { name: 'John Smith' }
  },
  {
    id: '2',
    action: 'Updated',
    entityType: 'expense',
    entityId: 'exp1',
    details: { title: 'New tractor parts' },
    createdAt: '2025-05-12T09:15:00Z',
    user: { name: 'Anna Johnson' }
  },
  {
    id: '3',
    action: 'Uploaded',
    entityType: 'document',
    entityId: 'doc1',
    details: { name: 'Water rights certificate' },
    createdAt: '2025-05-11T16:45:00Z',
    user: { name: 'Robert Davis' }
  }
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Bem-vindo ao app!</Text>
          <Text style={styles.subtitle}>Fazenda da Família Smith</Text>
        </View>
        
        <View style={styles.statsContainer}>
          <StatCard
            title="Despesas Totais"
            value="R$ 24.500"
            icon={<DollarSign size={16} color="#2D6A4F" />}
            trend={{ value: 5.2, isPositive: false }}
          />
          <StatCard
            title="Receita"
            value="R$ 35.200"
            icon={<TrendingUp size={16} color="#40916C" />}
            trend={{ value: 8.1, isPositive: true }}
            color="#40916C"
          />
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximas Tarefas</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>Ver todas</Text>
              <ChevronRight size={16} color="#2D6A4F" />
            </TouchableOpacity>
          </View>
          
          <Card flat style={styles.taskSummary}>
            <View style={styles.taskStats}>
              <View style={styles.taskStat}>
                <View style={[styles.taskIndicator, styles.todoIndicator]} />
                <Text style={styles.taskCount}>8</Text>
                <Text style={styles.taskLabel}>A Fazer</Text>
              </View>
              <View style={styles.taskStat}>
                <View style={[styles.taskIndicator, styles.inProgressIndicator]} />
                <Text style={styles.taskCount}>3</Text>
                <Text style={styles.taskLabel}>Em Progresso</Text>
              </View>
              <View style={styles.taskStat}>
                <View style={[styles.taskIndicator, styles.doneIndicator]} />
                <Text style={styles.taskCount}>12</Text>
                <Text style={styles.taskLabel}>Concluídas</Text>
              </View>
            </View>
            <Button 
              title="Adicionar Tarefa" 
              variant="outline"
              size="small"
              icon={<Plus size={16} color="#2D6A4F" />}
              style={styles.addButton}
            />
          </Card>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Atividades Recentes</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>Ver todas</Text>
              <ChevronRight size={16} color="#2D6A4F" />
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={mockActivities}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ActivityCard activity={item} />}
            scrollEnabled={false}
          />
        </View>
        
        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, styles.expenseIcon]}>
                <DollarSign size={20} color="#2D6A4F" />
              </View>
              <Text style={styles.actionText}>Adicionar Despesa</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, styles.documentIcon]}>
                <FileText size={20} color="#40916C" />
              </View>
              <Text style={styles.actionText}>Enviar Documento</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, styles.taskIcon]}>
                <ClipboardList size={20} color="#52B788" />
              </View>
              <Text style={styles.actionText}>Criar Tarefa</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, styles.eventIcon]}>
                <Calendar size={20} color="#74C69D" />
              </View>
              <Text style={styles.actionText}>Agendar Evento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F9',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2D6A4F',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6C584C',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: '#2D6A4F',
    fontWeight: '500',
  },
  taskSummary: {
    padding: 16,
  },
  taskStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  taskStat: {
    alignItems: 'center',
    flex: 1,
  },
  taskIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  todoIndicator: {
    backgroundColor: '#F97316',
  },
  inProgressIndicator: {
    backgroundColor: '#3B82F6',
  },
  doneIndicator: {
    backgroundColor: '#10B981',
  },
  taskCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  taskLabel: {
    fontSize: 14,
    color: '#6C584C',
  },
  addButton: {
    marginTop: 16,
  },
  quickActions: {
    marginBottom: 24,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  actionIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  expenseIcon: {
    backgroundColor: '#F97316',
  },
  documentIcon: {
    backgroundColor: '#40916C',
  },
  taskIcon: {
    backgroundColor: '#52B788',
  },
  eventIcon: {
    backgroundColor: '#74C69D',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
}); 