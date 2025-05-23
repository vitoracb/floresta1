import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { DollarSign, Calendar, CircleCheck as CheckCircle2, Circle as XCircle } from 'lucide-react-native';

export type ExpenseType = 'GENERAL' | 'MONTHLY';

export interface Expense {
  id: string;
  title: string;
  description?: string;
  amount: number;
  date: string;
  type: ExpenseType;
  category?: string;
  isPaid: boolean;
  paymentMethod?: string;
  receipt?: string;
  user: {
    id: string;
    name: string;
  };
}

interface ExpenseCardProps {
  expense: Expense;
  onPress?: () => void;
}

export function ExpenseCard({ expense, onPress }: ExpenseCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <DollarSign size={20} color="#2D6A4F" />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{expense.title}</Text>
            {expense.category && (
              <Text style={styles.category}>{expense.category}</Text>
            )}
          </View>
          <Badge 
            text={expense.type === 'MONTHLY' ? 'Monthly' : 'General'} 
            variant={expense.type === 'MONTHLY' ? 'primary' : 'secondary'}
            style={styles.badge}
          />
        </View>
        {expense.description && (
          <Text style={styles.description} numberOfLines={2}>
            {expense.description}
          </Text>
        )}
        <View style={styles.footer}>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{formatCurrency(expense.amount)}</Text>
            <View style={styles.dateContainer}>
              <Calendar size={12} color="#6C584C" />
              <Text style={styles.date}>{formatDate(expense.date)}</Text>
            </View>
          </View>
          <View style={styles.statusContainer}>
            {expense.isPaid ? (
              <View style={styles.paidContainer}>
                <CheckCircle2 size={14} color="#059669" />
                <Text style={styles.paidText}>Paid</Text>
              </View>
            ) : (
              <View style={styles.unpaidContainer}>
                <XCircle size={14} color="#DC2626" />
                <Text style={styles.unpaidText}>Unpaid</Text>
              </View>
            )}
            <Text style={styles.userText}>by {expense.user.name}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#E8F4EA',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  category: {
    fontSize: 12,
    color: '#6C584C',
  },
  badge: {
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  amountContainer: {
    flex: 1,
  },
  amount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D6A4F',
    marginBottom: 4,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: '#6C584C',
    marginLeft: 4,
  },
  statusContainer: {
    alignItems: 'flex-end',
  },
  paidContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  paidText: {
    fontSize: 12,
    color: '#059669',
    fontWeight: '500',
    marginLeft: 4,
  },
  unpaidContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  unpaidText: {
    fontSize: 12,
    color: '#DC2626',
    fontWeight: '500',
    marginLeft: 4,
  },
  userText: {
    fontSize: 12,
    color: '#6C584C',
  },
});