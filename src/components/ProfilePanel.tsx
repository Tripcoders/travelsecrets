import React from 'react';
import { motion } from 'framer-motion';
import { X, User, Bell, CreditCard, History, LogOut } from 'lucide-react';
interface ProfilePanelProps {
  onClose: () => void;
}
export function ProfilePanel({
  onClose
}: ProfilePanelProps) {
  const menuItems = [{
    icon: User,
    label: 'My Account',
    action: () => console.log('account')
  }, {
    icon: Bell,
    label: 'Notifications',
    action: () => console.log('notifications')
  }, {
    icon: CreditCard,
    label: 'Payment Methods',
    action: () => console.log('payment')
  }, {
    icon: History,
    label: 'Travel History',
    action: () => console.log('history')
  }, {
    icon: LogOut,
    label: 'Sign Out',
    action: () => console.log('logout')
  }];
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="fixed inset-0 bg-black/50 z-50" onClick={onClose}>
      <motion.div initial={{
      x: '100%'
    }} animate={{
      x: 0
    }} exit={{
      x: '100%'
    }} transition={{
      type: 'spring',
      damping: 25,
      stiffness: 200
    }} className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl" onClick={e => e.stopPropagation()}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Profile</h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
              <X strokeWidth={2.2} size={20} />
            </button>
          </div>
          <div className="space-y-2">
            {menuItems.map((item, index) => <motion.button key={item.label} initial={{
            x: 20,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1
          }} transition={{
            delay: index * 0.1
          }} className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg text-left" onClick={item.action}>
                <item.icon strokeWidth={2.2} size={18} />
                <span>{item.label}</span>
              </motion.button>)}
          </div>
        </div>
      </motion.div>
    </motion.div>;
}