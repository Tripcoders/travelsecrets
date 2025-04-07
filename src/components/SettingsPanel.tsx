import React from 'react';
import { motion } from 'framer-motion';
import { X, Globe, Bell, Moon, Shield, Zap } from 'lucide-react';
interface SettingsPanelProps {
  onClose: () => void;
}
export function SettingsPanel({
  onClose
}: SettingsPanelProps) {
  const settings = [{
    icon: Globe,
    label: 'Language',
    value: 'English'
  }, {
    icon: Bell,
    label: 'Notifications',
    value: 'On'
  }, {
    icon: Moon,
    label: 'Dark Mode',
    value: 'Off'
  }, {
    icon: Shield,
    label: 'Privacy',
    value: 'Default'
  }, {
    icon: Zap,
    label: 'Performance',
    value: 'High'
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
            <h2 className="text-xl font-bold">Settings</h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
              <X strokeWidth={2.2} size={20} />
            </button>
          </div>
          <div className="space-y-2">
            {settings.map((setting, index) => <motion.div key={setting.label} initial={{
            x: 20,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1
          }} transition={{
            delay: index * 0.1
          }} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <setting.icon strokeWidth={2.2} size={18} />
                  <span>{setting.label}</span>
                </div>
                <span className="text-sm text-gray-500">{setting.value}</span>
              </motion.div>)}
          </div>
        </div>
      </motion.div>
    </motion.div>;
}