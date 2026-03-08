export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      availability_rules: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          rule_key: string
          rule_value: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          rule_key: string
          rule_value?: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          rule_key?: string
          rule_value?: Json
          updated_at?: string
        }
        Relationships: []
      }
      bookings: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          session_id: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          session_id: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          session_id?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          allowed_domains: string[]
          created_at: string
          id: string
          logo_url: string | null
          name: string
          settings: Json
          slug: string
          updated_at: string
        }
        Insert: {
          allowed_domains?: string[]
          created_at?: string
          id?: string
          logo_url?: string | null
          name: string
          settings?: Json
          slug: string
          updated_at?: string
        }
        Update: {
          allowed_domains?: string[]
          created_at?: string
          id?: string
          logo_url?: string | null
          name?: string
          settings?: Json
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          contact_method: string
          created_at: string
          email: string
          id: string
          message: string
          name: string
          organisation: string | null
          page_source: string | null
        }
        Insert: {
          contact_method?: string
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          organisation?: string | null
          page_source?: string | null
        }
        Update: {
          contact_method?: string
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          organisation?: string | null
          page_source?: string | null
        }
        Relationships: []
      }
      google_oauth_tokens: {
        Row: {
          created_at: string
          id: string
          provider: string
          refresh_token: string
          scope: string | null
          token_type: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          provider: string
          refresh_token: string
          scope?: string | null
          token_type?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          provider?: string
          refresh_token?: string
          scope?: string | null
          token_type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      news_items: {
        Row: {
          created_at: string
          discovered_at: string
          id: string
          published_at: string | null
          source_domain: string | null
          source_name: string
          status: string
          summary: string | null
          title: string
          topic: string
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          discovered_at?: string
          id?: string
          published_at?: string | null
          source_domain?: string | null
          source_name: string
          status?: string
          summary?: string | null
          title: string
          topic?: string
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          discovered_at?: string
          id?: string
          published_at?: string | null
          source_domain?: string | null
          source_name?: string
          status?: string
          summary?: string | null
          title?: string
          topic?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      presentation_signups: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          name: string
          presentation: string
          use_context: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          name: string
          presentation?: string
          use_context?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          presentation?: string
          use_context?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          client_id: string | null
          completed_stages: string[]
          created_at: string
          email: string
          enrolment_date: string
          id: string
          name: string
          role_group: string
          updated_at: string
          user_id: string
        }
        Insert: {
          client_id?: string | null
          completed_stages?: string[]
          created_at?: string
          email: string
          enrolment_date?: string
          id?: string
          name: string
          role_group?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          client_id?: string | null
          completed_stages?: string[]
          created_at?: string
          email?: string
          enrolment_date?: string
          id?: string
          name?: string
          role_group?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      qa_feedback: {
        Row: {
          ai_query: string | null
          created_at: string
          helpful: boolean
          id: string
          qa_item_id: string | null
        }
        Insert: {
          ai_query?: string | null
          created_at?: string
          helpful: boolean
          id?: string
          qa_item_id?: string | null
        }
        Update: {
          ai_query?: string | null
          created_at?: string
          helpful?: boolean
          id?: string
          qa_item_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "qa_feedback_qa_item_id_fkey"
            columns: ["qa_item_id"]
            isOneToOne: false
            referencedRelation: "qa_items"
            referencedColumns: ["id"]
          },
        ]
      }
      qa_items: {
        Row: {
          answer: string
          created_at: string
          fts: unknown
          id: string
          published: boolean
          question: string
          slug: string | null
          tags: string[] | null
          updated_at: string
          view_count: number
        }
        Insert: {
          answer: string
          created_at?: string
          fts?: unknown
          id?: string
          published?: boolean
          question: string
          slug?: string | null
          tags?: string[] | null
          updated_at?: string
          view_count?: number
        }
        Update: {
          answer?: string
          created_at?: string
          fts?: unknown
          id?: string
          published?: boolean
          question?: string
          slug?: string | null
          tags?: string[] | null
          updated_at?: string
          view_count?: number
        }
        Relationships: []
      }
      qa_query_log: {
        Row: {
          created_at: string
          id: string
          query: string
        }
        Insert: {
          created_at?: string
          id?: string
          query: string
        }
        Update: {
          created_at?: string
          id?: string
          query?: string
        }
        Relationships: []
      }
      qa_submissions: {
        Row: {
          admin_notes: string | null
          created_at: string
          email: string | null
          id: string
          question: string
          status: string
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          email?: string | null
          id?: string
          question: string
          status?: string
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          email?: string | null
          id?: string
          question?: string
          status?: string
        }
        Relationships: []
      }
      session_types: {
        Row: {
          capacity: number
          created_at: string
          description: string | null
          duration_minutes: number
          id: string
          is_active: boolean
          name: string
          slug: string
        }
        Insert: {
          capacity?: number
          created_at?: string
          description?: string | null
          duration_minutes?: number
          id?: string
          is_active?: boolean
          name: string
          slug: string
        }
        Update: {
          capacity?: number
          created_at?: string
          description?: string | null
          duration_minutes?: number
          id?: string
          is_active?: boolean
          name?: string
          slug?: string
        }
        Relationships: []
      }
      sessions: {
        Row: {
          client_id: string | null
          created_at: string
          date: string
          end_time: string
          id: string
          is_online: boolean
          location: string | null
          meeting_url: string | null
          notes: string | null
          start_time: string
          status: string
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          date: string
          end_time: string
          id?: string
          is_online?: boolean
          location?: string | null
          meeting_url?: string | null
          notes?: string | null
          start_time: string
          status?: string
          title: string
          type?: string
          updated_at?: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          date?: string
          end_time?: string
          id?: string
          is_online?: boolean
          location?: string | null
          meeting_url?: string | null
          notes?: string | null
          start_time?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sessions_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      user_feedback: {
        Row: {
          admin_response: string | null
          created_at: string
          feedback: string
          feedback_type: string
          id: string
          name: string | null
          status: string
        }
        Insert: {
          admin_response?: string | null
          created_at?: string
          feedback: string
          feedback_type?: string
          id?: string
          name?: string | null
          status?: string
        }
        Update: {
          admin_response?: string | null
          created_at?: string
          feedback?: string
          feedback_type?: string
          id?: string
          name?: string | null
          status?: string
        }
        Relationships: []
      }
      user_questions: {
        Row: {
          answer: string | null
          created_at: string
          id: string
          page_submitted_from: string | null
          question: string
          status: string
        }
        Insert: {
          answer?: string | null
          created_at?: string
          id?: string
          page_submitted_from?: string | null
          question: string
          status?: string
        }
        Update: {
          answer?: string | null
          created_at?: string
          id?: string
          page_submitted_from?: string | null
          question?: string
          status?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      validate_email_domain: { Args: { _email: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      booking_status: "pending" | "confirmed" | "cancelled" | "completed"
      session_status: "scheduled" | "in_progress" | "completed" | "cancelled"
      session_type: "awareness" | "manager" | "advanced" | "coaching" | "custom"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      booking_status: ["pending", "confirmed", "cancelled", "completed"],
      session_status: ["scheduled", "in_progress", "completed", "cancelled"],
      session_type: ["awareness", "manager", "advanced", "coaching", "custom"],
    },
  },
} as const
